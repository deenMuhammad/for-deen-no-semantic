window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const players = [
    {
      id: 1,
      name: 'CR7',
      club: 'Juventus',
      url: 'https://www.instagram.com/cristiano/?hl=en',
      votes: generateVoteCount(),
      avatar: "images/avatars/matthew.png",
      playerImg: "images/players/CR7.jpg"
    },
    {
      id: 2,
      name: 'LM10',
      club: 'Barcelona',
      url: 'https://www.instagram.com/leomessi/',
      votes: generateVoteCount(),
      avatar: 'images/avatars/kristy.png',
      playerImg: '~/images/players/LM10.jpg'
    },
    {
      id: 3,
      name: 'MS10',
      club: 'Liverpool',
      url: 'https://www.instagram.com/mosalah/?hl=en',
      votes: generateVoteCount(),
      avatar: 'images/avatars/veronika.jpg',
      playerImg: 'images/players/MS10.jpg'
    }, 
    {
      id: 4,
      name: 'HS7',
      club: 'Tottenham',
      url: 'https://www.instagram.com/hm_son7/?hl=en',
      votes: generateVoteCount(),
      avatar: 'images/avatars/justen.jpg',
      playerImg: 'images/players/HS7.jpg'
    }
  ];

  return { players: players };
}());

