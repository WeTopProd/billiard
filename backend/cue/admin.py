from django.contrib import admin

from .models import Cue


class CueAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'title',
        'composition',
        'structure',
        'workshop',
        'weight',
        'article',
        'price',
        'play'
    )
    ordering = ('title', )
    search_fields = ('title', 'price', 'article')
    list_filter = ('title', 'price', 'article', 'composition')


admin.site.register(Cue, CueAdmin)
