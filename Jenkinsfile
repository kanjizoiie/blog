pipeline {
    agent {
        docker { image 'node:16.13.1-alpine' }
    }

    options {
        skipStagesAfterUnstable()
    }

    node {
      stage('Example') {
        if (env.BRANCH_NAME == 'master') {
          echo 'I only execute on the master branch'
              } else {
          echo 'I execute elsewhere'
        }
      }

      stage('Setup') {
        echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
      }

      stage('Install') {
        echo 'Installing Node Dependencies'
        sh 'npm ci'
      }

      stage('Test') {
        echo 'Testing application'
        sh 'npm test'
      }
      stage('Build') {
        echo 'Building application'
        docker.build("my-image:${env.BUILD_ID}")
      }
      stage('Deploy') {
        echo 'Deploying'
      }
    }
}
