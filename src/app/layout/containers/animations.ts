import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';


export const previous = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%' })
  ]),
  group([
    query(':leave', [
      animate('0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)', style({ left: '100%' }))
    ], {optional: true}),
    query(':enter', [
      animate('0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)', style({ left: '0%' }))
    ])
  ]),
];

export const next = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '100%' })
  ]),
  group([
    query(':leave', [
      animate('0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)', style({ left: '-100%' }))
    ], {optional: true}),
    query(':enter', [
      animate('0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)', style({ left: '0%' }))
    ])
  ]),
];
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Add => *', previous),
    transition('Edit => *', previous),
    transition('Details => *', previous),
    transition('* <=> *', next)
]);
