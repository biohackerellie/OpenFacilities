enum BuildingAll {
	All = 'All',
	West = 'West Elementary',
	South = 'South Elementary',
	Middle = 'Laurel Middle School',
	High = 'Laurel High School',
	Graff = 'Graff Elementary',
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

const buildingCalendars: Readonly <{ [key in BuildingAll]: string}> = {
  [BuildingAll.All]: 'https://calendar.google.com/calendar/embed?src=c_a55b94eb4dd05e5dd936dd548d434d6a25c2694efe67224e3eff10205d2fb82b%40group.calendar.google.com&ctz=America%2FDenver',
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



const buildingColors: Record<string, string> = {
  'West Elementary': 'purple',
  'South Elementary': 'blue',
  'Laurel Middle School': 'green',
  'Laurel High School': 'skyblue',
  'Graff Elementary': 'pink',
  'Administration Building': 'orange',
};

type SideBarType = {
	title: string;
	href: string;
}[]

const userSideBar:SideBarType = [
	{ title: 'Reservations', href: '/account'},
	{ title: 'Details', href: '/account/details'},
]



export { buildingCalendars, Building, BuildingAll, buildingColors, userSideBar };
