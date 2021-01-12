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
        sshPublisher(publishers: [sshPublisherDesc(configName: 'test kube', transfers: [sshTransfer(cleanRemote: true, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: true, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/srv/myusername/', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
      }
    }

    stage('Build') {
      steps {
        sshPublisher(publishers: [sshPublisherDesc(configName: 'test kube', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'cd /srv/myusername && npm install', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true, usePty:true)])
      }
    }

    stage('Start') {
      steps {
        sshPublisher(publishers: [sshPublisherDesc(configName: 'test kube', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'cd /srv/myusername/ && /home/phlo/.nvm/versions/node/v14.15.4/bin/pm2 start index.js', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '',  remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true, usePty:true)])
      }
    }
  }
}
