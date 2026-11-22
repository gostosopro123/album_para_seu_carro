import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt



from.models import Album

@csrf_exempt
def api_albuns(request):
    if request.method == "POST":
        dados = json.loads(request.body)
        avaliacao =dados.get("avaliacao")
        ano =dados.get("ano")

        if avaliacao is None or not (0 <= avaliacao <=10):
            return JsonResponse(
                {"erro": "A avaliacao deve estar entre 0 e 10."},
                status = 400,
            )
        if ano is  None or not (1900 <= ano <= 2026):
            return JsonResponse(
                {"erro": "O ano deve estar entre 1900 e 2026."},
                status=400,
            )
        
        album = Album.objects.create(
            titulo=dados["titulo"],
            artista=dados["artista"],
            avaliacao=avaliacao,
            ano=ano,
        )
        return JsonResponse({"id": album.id}, status=201)
    
    albuns = list(Album.objects.values())
    return JsonResponse(albuns, safe=False)

def resumo(request):
    albuns = list(Album.objects.all())
    total = len(albuns)

    if total == 0:
        return JsonResponse({"total": 0, "media_avaliacao": 0, "melhor": None})

    soma = 0 
    melhor = albuns[0]
    for album in albuns:
        soma += album.avaliacao
        if album.avaliacao > melhor.avaliacao: 
            melhor = album

    return JsonResponse({
        "total": total,
        "media_avaliacao": round(soma / total, 2),
        "melhor": melhor.titulo,
})