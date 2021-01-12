pipeline {
  agent any
  environment {
       PM2 = "/home/phlo/.nvm/versions/node/v14.15.4/bin/pm2"
       BASE = "/srv/"   
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Transfer') {
      wrap([$class: 'BuildUser']) {
        steps {
          sshPublisher(publishers: [sshPublisherDesc(configName: 'test kube', transfers: [sshTransfer(cleanRemote: true, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: true, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '${BASE}${env.BUILD_USER_ID}/', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
        }
      }
    }

    stage('Build') {
      wrap([$class: 'BuildUser']) {
        steps {
          sshPublisher(publishers: [sshPublisherDesc(configName: 'test kube', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'cd ${BASE}${env.BUILD_USER_ID} && npm install', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true, usePty:true)])
        }
      }
    }

    stage('Start') {
      wrap([$class: 'BuildUser']) {
        steps {
          sshPublisher(publishers: [sshPublisherDesc(configName: 'test kube', transfers: [sshTransfer(cleanRemote: false, excludes: '', 
          execCommand: 'cd ${BASE}${env.BUILD_USER_ID} && ${PM2} delete your_app_name || : && ${PM2} start index.js -i 1 --name ${env.BUILD_USER_ID}', 
          execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '',  remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true, usePty:true)])
        }
      }
    }
  }
}
