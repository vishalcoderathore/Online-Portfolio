export const work = [
  {
    workId: 'work1',
    organization: 'Multi-Tech Systems',
    position: 'Software Engineer',
    duration: '06-2018',
    location: 'Minneapolis, MN',
    description:
      'Migrating Node-Red from existing Conduits (Routers) to the AWS Cloud infrastructure to provide improved data processing and systems engineering capabilities on the IoT devices. Developed web app using MERN stack deployed behind Nginx server for path based routing to Node-Red docker containers.',
    details: [
      'Developed full stack prototype application using MERN stack, deployed on Amazon Web Services - EC2 instance.',
      'Used Docker containers to deploy Nginx with docker-gen for path based routing to Node-Red containers.',
      'Wrote Python Scripts to simulate data transmission from conduit devices to cloud using JWT Authentication.',
      'Used Mosquitto ​ ​MQTT over websockets to send real time data from Conduits (IoT Gateway devices) to the cloud.',
      'Developed customizable Node-Red Dashboards to track real time data using widgets like gauges and ui controls. '
    ]
  },
  {
    workId: 'work2',
    organization: 'Sherwin Williams',
    position: 'Full Stack Developer',
    duration: '08-2016 - 08-2017',
    location: ' Cleveland, OH',
    description:
      'Worked on upgrading Physical Inventory Adjustment (PIA), and added new functionalities ranging from front end to back end. The application is used in all 4000 SW stores across U.S. and Canada by the store managers to track their inventory online.',
    details: [
      'Developed new features to enhance user experience and integrated the app with modified database.',
      'Used Hibernate as the ORM tool for connecting to the DAO layer and storing stores and product information.',
      'Developed business logic for the service layer to manage new improvements using Java 1.8.',
      'Written batch scripts to load new data from flat files into the database from remote Unix machines.',
      'Used JQuery extensively to modify front end and add user friendly widgets. ',
      'Used SAP Business Objects to create and schedule product statistics reports.',
      'Worked closely with different teams to establish problem specification and system designs.'
    ]
  },
  {
    workId: 'work3',
    organization: 'Wells Fargo',
    position: 'Java Developer',
    duration: '07-2015 - 07-2016',
    location: 'Philadelphia, PA',
    description:
      'Worked on upgrading Cyber Bank Reports (CBR), that provides internal customers of the bank the ability to login and check their accounts with the bank online and download the transaction reports pdf’s.',
    details: [
      'Used Wells Fargo custom tags to re - write the front end to make the app ADA compliant.',
      'Custom tags were based on YUI framework and were called WF-RIA 2 tags.',
      'Developed DAO layer and performed SQL queries to store and retrieve database results.',
      'Utilized SVN to share and maintain the source code and Eclipse as the IDE.'
    ]
  }
];
