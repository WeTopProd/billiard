# Generated by Django 3.2 on 2023-06-02 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0003_alter_goods_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goods',
            name='type',
            field=models.CharField(blank=True, choices=[('case', 'Чехол'), ('sticker', 'Наклейка'), ('chalk', 'Мел'), ('glove', 'Перчатки')], max_length=150, null=True, verbose_name='Тип аксессуара'),
        ),
    ]
