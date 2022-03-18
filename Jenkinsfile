pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Setup') {
          steps {
            echo 'Setup'
          }
        }
        stage('Install') {
          steps {
            echo 'Installing'
          }
        }
        stage('Test') {
          steps {
            echo 'Testing'
          }
        }
        stage('Build Docker Image') {
          steps {
            echo 'Building Docker Image'
          }
        }
        stage('Deploy') {
          steps {
            echo 'Deploying'
          }
        }
    }
}
