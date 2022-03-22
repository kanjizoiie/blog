node {
  stage('Checkout from SCM') {
    checkout scm
  }

  withDockerContainer(image: 'node:16.13.1-alpine') {
    stage('Setup') {
      sh "printenv"
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

  docker.withRegistry('http://192.168.10.156:5000') {
    def imageName = "blog:${env.BUILD_ID}"
    if (env.BRANCH_NAME != 'main') {
      def imageName = "blog:${env.BUILD_ID}-${env.BRANCH_NAME}-dev"
    }

    stage('Build Image') {
      echo "Building Image ${imageName}"
      def image = docker.build(imageName)
      stage('Publish Image') {
        echo 'Deploying'
        if (env.BRANCH_NAME == 'main') {
          image.push('latest')
        } else {
          image.push('dev')
        }
      }
    }
  }
}
