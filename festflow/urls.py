from django.conf.urls import include, url
from django.contrib.auth.views import logout
from django.views.generic.base import RedirectView
from . import views

urlpatterns = [

    url(r'^favicon.ico/$', RedirectView.as_view(url='/static/assets/images/avskr_logo.png')),

    # Index Page
    url(r'^$', views.index, name='index'),

    # Home Page
    url(r'^home/$', views.home, name='home'),

    # Team Page
    url(r'^teams/$', views.teams, name='teams'),

    # Web Team Page
    url(r'^webteam/$', views.webteams, name='webteams'),

    # About Page
    url(r'^about/$', views.about, name='about'),

    # Sponsors Page
    url(r'^sponsors/$', views.sponsors, name='sponsors'),

    # Event Page
    url(r'^events/$', views.events, name='events'),

    # Ignitia Page
    url(r'^ignitia/$', views.ignitia, name='ignitia'),

    # Attractions Page
    url(r'^attractions/$', views.attractions, name='attractions'),

    # Workshop Page
    url(r'^workshop/$', views.workshop, name='workshop'),

    # Schedule Page
    url(r'^schedule/$', views.timeline, name='timeline'),

    # Gallery Page
    url(r'^gallery/$', views.gallery, name='gallery'),

    # Reach Us Page
    url(r'^reachus/$', views.reachus, name='reachus'),

    # FAQ Page
    url(r'^faq/$', views.faq, name='FAQ'),

    # Subscribe Page
    url(r'^subscribe/$', views.subscribe, name='subscribe'),

    # Event View Page
    url(r'^events/(?P<event_identifier>[a-z]*)/$',
        views.event_view, name='event_view'),

    # Event Register Page
    url(r'^register_event/(?P<event_identifier>[a-z]*)/$',
        views.register_event, name='register_event'),

    # Login Page
    url(r'^login/$', views.login_page, name='login_page'),

    # social login urls
    url('', include('social_django.urls')),

    #map
    url(r'^map/$', views.map, name='map'),

    # Form to complete profile
    url(r'^complete_profile/$',
        views.complete_profile, name='complete_profile'),

    # logout url
    url(r'^logout/$',
        logout, {'next_page': '/home'})
]
