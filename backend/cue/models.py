from django.db import models

from users.models import User


class Cue(models.Model):
    title = models.CharField(max_length=100, verbose_name='Название кия')
    description = models.CharField(max_length=255, verbose_name='Описание кия')
    composition = models.IntegerField(verbose_name='Составность кия')
    structure = models.CharField(max_length=150, verbose_name='Состав кия')
    workshop = models.CharField(max_length=100, verbose_name='Мастерская кия')
    weight = models.IntegerField(verbose_name='Вес кия')
    article = models.IntegerField(verbose_name='Артикул кия')
    price = models.FloatField(verbose_name='Цена кия')
    play = models.CharField(
        max_length=50,
        verbose_name='Принадлежность к игре'
    )
    image = models.ImageField(
        upload_to='backend_media/',
        verbose_name='Изображение кия'
    )

    class Meta:
        verbose_name = 'Кий'
        verbose_name_plural = 'Кии'
        ordering = ['-title']


class Favorite(models.Model):
    user = models.ForeignKey(
        User,
        related_name='favorites',
        on_delete=models.CASCADE
    )
    cue = models.ForeignKey(
        Cue,
        related_name='users_favorites',
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = 'Избранное'
        verbose_name_plural = 'Избранные'
        constraints = [
            models.UniqueConstraint(
                fields=['cue', 'user'],
                name='favorite_unique'
            )
        ]

    def __str__(self):
        return f'{self.user} added {self.cue} to favorite'


class ShoppingCart(models.Model):
    user = models.ForeignKey(
        User,
        verbose_name='Список покупок',
        related_name='shopping_cart',
        on_delete=models.CASCADE
    )
    cue = models.ForeignKey(
        Cue,
        verbose_name='Покупка',
        related_name='shopping_cart',
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = 'Покупка'
        verbose_name_plural = 'Покупки'
        constraints = [
            models.UniqueConstraint(
                fields=['cue', 'user'],
                name='shoppinglist_unique'
            )
        ]

    def __str__(self):
        return f'{self.user} added {self.cue} in shopping cart'
