pipeline {
  agent any
  environment {
       PM2 = "/home/phlo/.nvm/versions/node/v14.15.4/bin/pm2"
       BASE = "/srv/"
       TARGET = "test kube"
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Transfer') {      
      steps {
        wrap([$class: 'BuildUser']) {
          sshPublisher(publishers: [sshPublisherDesc(configName: $TARGET, transfers: [sshTransfer(cleanRemote: true, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: true, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: "${BASE}${JOB_NAME}/", remoteDirectorySDF: false, removePrefix: '', sourceFiles: '*')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
        }
      }
    }

    stage('Build') {
      steps {
        wrap([$class: 'BuildUser']) {
          sshPublisher(publishers: [sshPublisherDesc(configName: $TARGET, transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: "cd ${BASE}${JOB_NAME} && npm install", execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true, usePty:true)])
        }
      }
    }

    stage('Start') {
      steps {
        wrap([$class: 'BuildUser']) {
          sshPublisher(publishers: [sshPublisherDesc(configName: $TARGET, transfers: [sshTransfer(cleanRemote: false, excludes: '', 
          execCommand: "cd ${BASE}${JOB_NAME} && ${PM2} delete your_app_name || : && ${PM2} start index.js -i 1 --name ${JOB_NAME}", 
          execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '',  remoteDirectorySDF: false, removePrefix: '', sourceFiles: '')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true, usePty:true)])
        }
      }
    }
  }
}
