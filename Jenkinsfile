pipeline {
  agent any
  tools { nodejs "node" }

  stages {
    stage('Tooling versions') {
      steps {
        sh 'docker --version'
        sh 'docker-compose --version'
        sh 'node -v'
      }
    }

    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }

    stage('Build') {
      steps {
        sh 'docker-compose build'
        sh 'docker-compose push'
      }
    }
    
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

    stage('Run') {
      steps {
        sh 'docker-compose up -d'
      }
    }

    stage('Logout') {
      steps {
        sh 'docker logout'
      }
    }

  }
  environment {
    userName = 'racinglocura07'
    DOCKERHUB_CREDENTIALS = 'credentials(\'dockerhub\')'
  }
}