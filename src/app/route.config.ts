import {Route} from 'angular2/router';
import {HeroComponent} from './hero/hero';
import {HomeComponent} from './home/home';
import {AboutUsComponent} from './home/about/about';
import {ContactComponent} from './home/contact/contact';

export var Routes = {
  home: new Route({ path: '/', component: HomeComponent, name: 'Home', data: { title: 'Klau y Chris' } }),
  heroes: new Route({ path: '/heroes/...', component: HeroComponent, name: 'Heroes', data: { title: 'Invites', defaultChildRoute: 'List' } }),
  aboutUs: new Route({ path: '/about', component: AboutUsComponent, name: 'AboutUs', data: { title: 'About the place' } }),
  contact: new Route({ path: '/contact', component: ContactComponent, name: 'Contacts', data: { title: 'Contact' } })
}

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);