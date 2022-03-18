node {
  withDockerContainer(image: 'node:16.13.1-alpine'){
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
  }

  stage('Building') {
    if (env.BRANCH_NAME == 'main') {
      stage('Build') {
        echo 'Building application'
        docker.build("blog:${env.BUILD_ID}")
      }
      stage('Deploy') {
        echo 'Deploying'
      }
    } else {
      echo 'I execute elsewhere'
    }
  }

}
