from django.db import models


class Blog(models.Model):
    title = models.CharField(max_length=20)
    text = models.TextField(null=True)


class ReadNum(models.Model):
    read_num = models.IntegerField(default = 0)
    blog = models.OneToOneField(Blog,on_delete=models.DO_NOTHING, related_name='blog_num')


class Movie(models.Model):
    title = models.CharField(max_length=40)
    piao = models.IntegerField()
