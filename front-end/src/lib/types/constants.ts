import { describe } from 'node:test';

enum BuildingAll {
  All = 'All',
  West = 'West Elementary School',
  South = 'South Elementary School',
  Middle = 'Laurel Middle School',
  High = 'Laurel High School',
  Graff = 'Graff Elementary School',
  Admin = 'Administration Building',
  Stadium = 'Laurel Stadium',
}

enum Building {
  West = 'West Elementary',
  South = 'South Elementary',
  Middle = 'Laurel Middle School',
  High = 'Laurel High School',
  Graff = 'Graff Elementary',
  Admin = 'Administration Building',
  Stadium = 'Laurel Stadium',
}

const CategoryDescriptions = {
  Staff: {
    name: 'LPS Staff',
    description: 'For all LPS Staff to reserve and LPS activity.',
  },
  Category1: {
    name: 'Category 1 - Community groups involving LPS children and non paid adults, or LPS staff ',
    description:
      'Groups in this category are basically community groups (church or secular) whose memberships involve Laurel school age children whose leaders or advisors are generally non-paid adults and whose main purpose is to in some way educate the youngster member. These groups will not be charged a rental fee for the use of the buildings except the LHS auditorium, any computer labs, or the Stadium.',
  },
  Category2: {
    name: 'Category 2 - All community non-profit organizations and groups',
    description:
      'This category includes all community non-profit organizations (IRS numbers) and community groups of people who wish to use facilities owned by the school district for lectures, promotional activities, political rallies, entertainment, college courses, athletic groups, exercise groups, dance groups, church services or other activities for which public halls or commercial facilities generally are rented.',
  },
  Category3: {
    name: 'Category 3 - all for-profit organizations and non-profits from outside of the community',
    description:
      'This group shall include all for-profit organizations not listed in #1 or #2 and non-profit organizations from outside the community.',
  },
} as const;

const buildingCalendars: Readonly<{ [key in BuildingAll]: string }> = {
  [BuildingAll.All]:
    'https://calendar.google.com/calendar/embed?src=c_a55b94eb4dd05e5dd936dd548d434d6a25c2694efe67224e3eff10205d2fb82b%40group.calendar.google.com&ctz=America%2FDenver',
  [BuildingAll.West]:
    'https://calendar.google.com/calendar/embed?src=c_0b2e2e109de17b0bfb36c10b64324c2d4ddcaa19c12998aca1cd5a77ac33e8a5%40group.calendar.google.com&ctz=America%2FDenver',
  [BuildingAll.South]:
    'https://calendar.google.com/calendar/embed?src=c_177688d95252d6bd257327592bb3802966de1b52b47c2ad4bc94232738ece835%40group.calendar.google.com&ctz=America%2FDenver',
  [BuildingAll.Middle]:
    'https://calendar.google.com/calendar/embed?src=c_8eff489230617e6c41b5e58bc6a617df6c9cbce18e87042c2e56a2db148c5719%40group.calendar.google.com&ctz=America%2FDenver',
  [BuildingAll.High]:
    'https://calendar.google.com/calendar/embed?src=c_01cc33d2abc19e76a8fc604964d68670ec62556b2e2b761bce275f8ede807792%40group.calendar.google.com&ctz=America%2FDenver',
  [BuildingAll.Graff]:
    'https://calendar.google.com/calendar/embed?src=c_419e3a96109d8a6a3cd718fa3583f1a105c39f9d9ecff712f2caabfb549ee2d9%40group.calendar.google.com&ctz=America%2FDenver',
  [BuildingAll.Admin]:
    'https://calendar.google.com/calendar/embed?src=c_1885ejmm84vl8g0pmttlucapva16e%40resource.calendar.google.com&ctz=America%2FDenver',
  [BuildingAll.Stadium]:
    'https://calendar.google.com/calendar/embed?src=c_188f41n72e9d0h33l3n96tt6jg9t6%40resource.calendar.google.com&ctz=America%2FDenver',
};

const calendarIDs = [
  {
    school: 'West Elementary',
    calendar:
      'c_0b2e2e109de17b0bfb36c10b64324c2d4ddcaa19c12998aca1cd5a77ac33e8a5@group.calendar.google.com',
  },
  {
    school: 'South Elementary',
    calendar:
      'c_177688d95252d6bd257327592bb3802966de1b52b47c2ad4bc94232738ece835@group.calendar.google.com',
  },
  {
    school: 'Laurel Middle School',
    calendar:
      'c_8eff489230617e6c41b5e58bc6a617df6c9cbce18e87042c2e56a2db148c5719@group.calendar.google.com',
  },
  {
    school: 'Laurel High School',
    calendar:
      'c_01cc33d2abc19e76a8fc604964d68670ec62556b2e2b761bce275f8ede807792@group.calendar.google.com',
  },
  {
    school: 'Graff Elementary',
    calendar:
      'c_419e3a96109d8a6a3cd718fa3583f1a105c39f9d9ecff712f2caabfb549ee2d9@group.calendar.google.com',
  },
  {
    school: 'Administration Building',
    calendar: 'c_1885ejmm84vl8g0pmttlucapva16e@resource.calendar.google.com',
  },
  {
    school: 'Laurel Stadium',
    calendar: 'c_188f41n72e9d0h33l3n96tt6jg9t6@resource.calendar.google.com',
  },
] as const;

const buildingColors: Record<string, string> = {
  'West Elementary School': 'purple',
  'South Elementary School': 'blue',
  'Laurel Middle School': 'green',
  'Laurel High School': 'skyblue',
  'Graff Elementary School': 'pink',
  'Administration Building': 'orange',
};

export type SideBarType = {
  title: string;
  href: string;
}[];

const userSideBar: SideBarType = [
  { title: 'Reservations', href: '/account' },
  { title: 'Details', href: '/account/details' },
];

const adminSideBar: SideBarType = [
  { title: 'Dashboard', href: '/admin/dashboard' },
  { title: 'Reservations', href: '/admin/reservations' },
  { title: 'Requests', href: '/admin/requests' },
  { title: 'Users', href: '/admin/users' },
  { title: 'Facilities', href: '/admin/facilities' },
];

const buildingNames = [
  'West Elementary',
  'South Elementary',
  'Laurel Middle School',
  'Laurel High School',
  'Graff Elementary',
  'Administration Building',
  'Laurel Stadium',
];

const buildingSideBar = [
  { title: 'All' },
  { title: 'West Elementary' },
  { title: 'South Elementary' },
  { title: 'Laurel Middle School' },
  { title: 'Laurel High School' },
  { title: 'Graff Elementary' },
  { title: 'Administration Building' },
  { title: 'Laurel Stadium' },
];
const buildingSideBar2 = [
  { title: 'All' },
  { title: 'West Elementary School' },
  { title: 'South Elementary School' },
  { title: 'Laurel Middle School' },
  { title: 'Laurel High School' },
  { title: 'Graff Elementary School' },
  { title: 'Administration Building' },
  { title: 'Laurel Stadium' },
];
/**
 * Building Calendars
 */

export const LHS = [
  {
    Id: 'c_18834acd5crp2geai332mq743j05i@resource.calendar.google.com',
    name: 'Auditorium',
    group: 'LHS',
  },
  {
    Id: 'c_1882le216ibqggunkm5or5g92326k@resource.calendar.google.com',
    name: 'Band Room',
    group: 'LHS',
  },
  {
    Id: 'c_1882f3re9inqggiogk23389b2kshk@resource.calendar.google.com',
    name: 'Choir Room',
    group: 'LHS',
  },
  {
    Id: 'c_1889ovmp6lt2sjb2n065sficbfogq@resource.calendar.google.com',
    name: 'LHS Classroom-FACS',
    group: 'LHS',
  },
  {
    Id: 'c_188ah9m6oj9isj2fksob2o6ii3vuu@resource.calendar.google.com',
    name: 'LHS Classroom',
    group: 'LHS',
  },
  {
    Id: 'c_188dse8k87kici4djaf3ea9lnsrqs@resource.calendar.google.com',
    name: 'Depot',
    group: 'LHS',
  },
  {
    Id: 'laurel.k12.mt.us_188cgnns65q82hnlgmnnaejo6q1ka6gb64q36cpp60q3ic9j60@resource.calendar.google.com',
    name: 'LHS Gym',
    group: 'LHS',
  },
  {
    Id: 'c_18831bll0uamuhj5jr03k3tbkt97k@resource.calendar.google.com',
    name: 'LHS Library',
    group: 'LHS',
  },
  {
    Id: 'c_188c3bnkmbraagthmamse6397qrn2@resource.calendar.google.com',
    name: 'LHS Parking Lot',
    group: 'LHS',
  },
  {
    Id: 'c_188398itno1gijugimohl2ogrngb8@resource.calendar.google.com',
    name: 'Practice Field',
    group: 'LHS',
  },
];

export const LMS = [
  {
    Id: 'c_188f1dit7nbtajd6kv7uk6v3aknl6@resource.calendar.google.com',
    name: 'LMS Band Room',
    group: 'LMS',
  },
  {
    Id: 'c_188bk7280sc46jfuilmkhvuo529lo@resource.calendar.google.com',
    name: 'LMS Classroom FACS',
    group: 'LMS',
  },
  {
    Id: 'c_188en6n8f95rqha7j330r5lanv1qk@resource.calendar.google.com',
    name: 'LMS Classroom',
    group: 'LMS',
  },
  {
    Id: 'c_188cpus5c7mr8ijjhevocvmk02k18@resource.calendar.google.com',
    name: 'LMS Commons',
    group: 'LMS',
  },
  {
    Id: 'c_188a0selkkk9ig12ic7msqq5865ji@resource.calendar.google.com',
    name: 'LMS Gym',
    group: 'LMS',
  },
  {
    Id: 'c_188be6mneijb8i9mg2o376cpba6fi@resource.calendar.google.com',
    name: 'LMS Library',
    group: 'LMS',
  },
  {
    Id: 'c_188fcg0j26krki0nivbhv25vjqgrg@resource.calendar.google.com',
    name: 'Mogan Field',
    group: 'LMS',
  },
];
export const Graff = [
  {
    Id: 'c_1883mq3h2jipqj6oiq45m5j2kl5na@resource.calendar.google.com',
    name: 'Graff Classroom',
    group: 'Graff',
  },
  {
    Id: 'c_1885i1r919lq2ga4mdm28dapu5phq@resource.calendar.google.com',
    name: 'Graff Field',
    group: 'Graff',
  },
  {
    Id: 'c_1887je2bh89aggavght7gkmn1aiba@resource.calendar.google.com',
    name: 'Graff Gym',
    group: 'Graff',
  },
  {
    Id: 'c_188271lj2bhcihgsk0g2dkof5vj3s@resource.calendar.google.com',
    name: 'Graff Cafeteria',
    group: 'Graff',
  },
  {
    Id: 'c_1883dhcn3nk7sgtiml9ovb7optrr6@resource.calendar.google.com',
    name: 'Graff Library',
    group: 'Graff',
  },
];
export const West = [
  {
    Id: 'c_188a26fgtijhqgs9jms7puq2i38ga@resource.calendar.google.com',
    name: 'West Baseball Field',
    group: 'West',
  },
  {
    Id: 'c_188djdq0pdv2chg5i2qvov3mbfca4@resource.calendar.google.com',
    name: 'West Classroom',
    group: 'West',
  },
  {
    Id: 'c_1880lf3vflm9gjs8kaqhf4hsqbo78@resource.calendar.google.com',
    name: 'West Gym',
    group: 'West',
  },
];
export const South = [
  {
    Id: 'c_188716h0cujjeg5ok7ugodl1g7cfm@resource.calendar.google.com',
    name: 'South Cafeteria',
    group: 'South',
  },
  {
    Id: 'c_1880vv5fpmknig6kmgdqa8q5e72uc@resource.calendar.google.com',
    name: 'South Baseball Field',
    group: 'South',
  },
  {
    Id: 'c_1884640j01c0ohrhgl29ikdp335v4@resource.calendar.google.com',
    name: 'South Classroom',
    group: 'South',
  },
];
export const Admin = [
  {
    Id: 'c_1885ejmm84vl8g0pmttlucapva16e@resource.calendar.google.com',
    name: 'Board Room',
    group: 'Admin',
  },
];

export const AllMasters = [
  {
    id: 'c_a55b94eb4dd05e5dd936dd548d434d6a25c2694efe67224e3eff10205d2fb82b@group.calendar.google.com',
    name: 'Master Calendar',
  },
];

export const calendarConfig = {
  calendars: AllMasters,
  api_key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  dailyRecurrence: 365,
  weeklyRecurrence: 52,
  monthlyRecurrence: 12,
};

export {
  buildingCalendars,
  adminSideBar,
  buildingSideBar,
  buildingSideBar2,
  buildingNames,
  Building,
  BuildingAll,
  buildingColors,
  userSideBar,
  CategoryDescriptions,
  calendarIDs,
};
