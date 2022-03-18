node {
  checkout([
    $class: 'GitSCM', 
    branches: [[name: '**']], 
    browser: [
      $class: 'GithubWeb', 
      repoUrl: 'https://github.com/kanjizoiie/blog'
    ], 
    extensions: [], 
    userRemoteConfigs: [
      [
        credentialsId: '0922dac4-da19-4145-91de-7dc724197670', 
        url: 'https://github.com/kanjizoiie/blog'
      ]
    ]
  ])

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

  if (true || env.BRANCH_NAME == 'main') {
    def imageName = "blog:${env.BUILD_ID}"
    stage('Build') {
      echo 'Building application'
      docker.build("blog:${env.BUILD_ID}")
    }
    stage('Deploy') {
      echo 'Deploying'
      sj "docker run blog:${env.BUILD_ID}"
    }
  } else {
    echo 'I execute elsewhere'
  }
}
