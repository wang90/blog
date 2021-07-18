import { createRouter, createWebHistory } from 'vue-router';
import { PageRouters } from './config';
const Routers = PageRouters.map( v=> { name: v }) 
let routerList: any = [];

const modules = import.meta.glob('../views/**/*.vue');
Object.keys(modules).forEach( key => {
  const nameMatch = key.match(/^\.\.\/views\/(.+)\.vue/)
  if( !nameMatch ) return
  const indexMatch = nameMatch[1].match(/(.*)\/Index$/i)
  const name = indexMatch ? indexMatch[1] : nameMatch[1];


  if ( name.toLowerCase() === 'home' ) {

  }
  routerList.push({
    path: `/${ name.toLowerCase() === 'home' ? '' :  name.toLowerCase() }`,
    name: `${ name.toUpperCase() }`,
    component: modules[key],
    meta: { keepAlive: true },
  })
})


console.log(routerList)
export default createRouter({
  history: createWebHistory(),
  routes: routerList,
});