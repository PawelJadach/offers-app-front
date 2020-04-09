const initState = {
  offers: [ 
  {
    id: 1,
    title: 'Tytuł ogłoszenia',
    price: 100,
    img: 'https://magboss.pl/pubs/uploads/telefon-xiaomi-redmi-7a-2-16gb-czarny-nowy-global-version,abd86491701946fc9ba49c5f2f1146cf-nowt.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    authorEmail: 'janek@janek.pl',
    creationDate: '07-04-2020',
  },
  {
    id: 2,
    title: 'Tytuł ogłoszenia',
    price: 100,
    img: 'https://magboss.pl/pubs/uploads/telefon-xiaomi-redmi-7a-2-16gb-czarny-nowy-global-version,abd86491701946fc9ba49c5f2f1146cf-nowt.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    authorEmail: 'pawel@wp.pl',
    creationDate: '07-04-2020',
  },
  {
    id: 3,
    title: 'Tytuł ogłoszenia',
    price: 100,
    img: 'https://magboss.pl/pubs/uploads/telefon-xiaomi-redmi-7a-2-16gb-czarny-nowy-global-version,abd86491701946fc9ba49c5f2f1146cf-nowt.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    authorEmail: 'pawel@wp.pl',
    creationDate: '07-04-2020',
  },
  {
    id: 4,
    title: 'Tytuł ogłoszenia',
    price: 100,
    img: 'https://magboss.pl/pubs/uploads/telefon-xiaomi-redmi-7a-2-16gb-czarny-nowy-global-version,abd86491701946fc9ba49c5f2f1146cf-nowt.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    authorEmail: 'janek@janek.pl',
    creationDate: '07-04-2020',
  },
  {
    id: 5,
    title: 'Tytuł ogłoszenia',
    price: 100,
    img: 'https://magboss.pl/pubs/uploads/telefon-xiaomi-redmi-7a-2-16gb-czarny-nowy-global-version,abd86491701946fc9ba49c5f2f1146cf-nowt.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    authorEmail: 'pawel@wp.pl123',
    creationDate: '07-04-2020',
  },
],
  error: '',
}

const offerReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default offerReducer;