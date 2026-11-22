from django.db import models


class Album(models.Model):
    titulo = models.CharField(max_length=100)
    artista = models.CharField(max_length=100)
    avaliacao = models.FloatField()
    ano = models.IntegerField()

    def __str__(self):
        return self.titulo  