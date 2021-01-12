pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Transfer') {
      steps {
        sshPublisher(publishers: [sshPublisherDesc(configName: 'test kube', transfers: [sshTransfer(cleanRemote: true, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: true, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '\'/srv/myusername/\'yyyy-MM-dd_HH-mm-ss', remoteDirectorySDF: true, removePrefix: '', sourceFiles: '*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
      }
    }

    stage('Build') {
      steps {
        sshPublisher(publishers: [sshPublisherDesc(configName: 'test kube', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'npm install', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '\'/srv/myusername/\'yyyy-MM-dd_HH-mm-ss', remoteDirectorySDF: true, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true, usePty:true)])
      }
    }

    stage('Start') {
      steps {
        sshPublisher(publishers: [sshPublisherDesc(configName: 'test kube', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'pm2 start index.js', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '\'/srv/myusername/\'yyyy-MM-dd_HH-mm-ss', remoteDirectorySDF: true, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true, usePty:true)])
      }
    }
  }
}
