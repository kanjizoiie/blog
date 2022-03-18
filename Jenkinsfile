pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }

    stages {
      stage('Setup') {
        steps {
          echo 'Running ${env.BUILD_ID} on ${env.JENKINS_URL}'
        }
      }
      stage('Install') {
        steps {
          echo 'Installing Node Dependencies'
          sh 'npm ci'
        }
      }
      stage('Test') {
        steps {
          echo 'Testing application'
          sh 'npm test'
        }
      }
      stage('Build') {
        steps {
          echo 'Building application'
          sh 'npm build'
        }
      }
      stage('Build Docker Image') {
        steps {
          echo 'Building Docker Image'
          sh 'docker build .'
        }
      }
      stage('Push Docker Image to LOCAL Docker Registry') {
        steps {
          echo 'Building Docker Image'
          sh 'docker push'
        }
      }
      stage('Deploy') {
        steps {
          echo 'Deploying'
        }
      }
    }
}
