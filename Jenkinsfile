node {
  checkout scm
  withDockerContainer(image: 'node:16.13.1-alpine') {
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
  docker.withRegistry('https://registry.example.com') {
    if (true || env.BRANCH_NAME == 'main') {
      def imageName = "blog:${env.BUILD_ID}"
      stage('Build Image') {
        echo 'Building application'
        def image = docker.build("blog:${env.BUILD_ID}")
        
        stage('Publish Image') {
          echo 'Deploying'
          image.push('latest')
        }
      }
    }
  }
}
