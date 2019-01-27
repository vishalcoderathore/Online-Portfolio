export const projectImages = [
  {
    src: '/images/ifeedback.png',
    href: '#project-1'
  },
  {
    src: '/images/forkify.png',
    href: '#project-2'
  },
  {
    src: '/images/expensify.png',
    href: '#project-3'
  },
  {
    src: '/images/portfolio.png',
    href: '#project-4'
  }
];

export const modalDetails = [
  {
    id: 'project-1',
    labelId: 'project-1-Label',
    title: 'iFeedback',
    mutedText: 'Create Surveys for your Clients',
    href: 'https://ifeedback-emails.herokuapp.com',
    projectInfo: [
      'Full Stack App using Mern Stack used to create Surveys and send them to single/multiple email addresses.',
      'App uses SendGrid API to create emails, Stripe API to mock payments which are required to purchase credits. These credits are used to create Surveys.',
      'Track all sent Surveys and monitor responses.'
    ],
    appStack: [
      'Axios',
      'Express',
      'Font Awesome',
      'Heroku',
      'Google OAuth',
      'Materialize CSS',
      'Mongo DB',
      'React.JS',
      'Redux State Management',
      'SendGrid API',
      'Stripe Payment API',
      'App is developed with Prod and Dev environments'
    ]
  },
  {
    id: 'project-2',
    labelId: 'project-2-Label',
    title: 'Recipe Finder',
    mutedText: 'Search your favorite recipes online',
    href: 'http://forkify-search-recipes.herokuapp.com/',
    projectInfo: [
      'Web App using JavaScript to search your favorite recipes online. You can search for recipes by typing a query to get a list of items that use the query item, select a recipe to display the details of it.'
    ],
    appStack: ['Axios', 'Babel', 'Express', 'Heroku', 'Node.js', 'Webpack']
  },
  {
    id: 'project-3',
    labelId: 'project-3-Label',
    title: 'Expensify',
    mutedText: 'Track your expenses anytime anywhere',
    href: 'http://track-expenses.herokuapp.com',
    projectInfo: [
      'Web App using React.JS that is used to track your expenses. You can add, view, modify and remove your expenses.',
      'Login using your Google Account. Click on Add Expense to add any new expense. Click on existing expese to either Update or Remove the expense. Click the app logo to reach the dashboard page.'
    ],
    appStack: [
      'Babel',
      'Enzyme',
      'Express',
      'Firebase (database & authtication)',
      'Font Awesome',
      'Heroku',
      'Jest',
      'Node.js',
      'Redux',
      'Webpack'
    ]
  },
  {
    id: 'project-4',
    labelId: 'project-4-Label',
    title: 'Portfolio',
    mutedText: 'You are currently viewing this project',
    href: 'http://track-expenses.herokuapp.com',
    projectInfo: ['Online portfolio showcasing my skills and experience.'],
    appStack: [
      'Babel',
      'Enzyme',
      'Express',
      'Font Awesome',
      'React',
      'AWS - IAM',
      'AWS - Route 53 & DNS',
      'AWS - CloudFront & SSL',
      'AWS - CodeBuild & Code Pipeline',
      'AWS - Lambda Functions'
    ]
  }
];
