# Generated by Django 3.2 on 2023-05-19 10:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cue', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='shoppingcart',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shopping_cart', to=settings.AUTH_USER_MODEL, verbose_name='Список покупок'),
        ),
        migrations.AddField(
            model_name='image',
            name='cue',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='cue.cue', verbose_name='Кий'),
        ),
        migrations.AddField(
            model_name='favorite',
            name='cue',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='users_favorites', to='cue.cue'),
        ),
        migrations.AddField(
            model_name='favorite',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='favorites', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='cue',
            name='image',
            field=models.ManyToManyField(blank=True, related_name='cues_img', to='cue.Image'),
        ),
        migrations.AddConstraint(
            model_name='shoppingcart',
            constraint=models.UniqueConstraint(fields=('cue', 'user'), name='shoppinglist_unique'),
        ),
        migrations.AddConstraint(
            model_name='favorite',
            constraint=models.UniqueConstraint(fields=('cue', 'user'), name='favorite_unique'),
        ),
    ]
