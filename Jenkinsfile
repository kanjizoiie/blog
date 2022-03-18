pipeline {
    agent {
        docker { image 'node:16.13.1-alpine' }
    }

    options {
        skipStagesAfterUnstable()
    }

    stages {
      stage('Setup') {
        steps {
          echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
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
          def customImage = docker.build("my-image:${env.BUILD_ID}")
        }
      }
      stage('Deploy') {
        steps {
          echo 'Deploying'
        }
      }
    }
}
