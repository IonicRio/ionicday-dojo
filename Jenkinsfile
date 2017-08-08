node('ionic'){
  stage('Clean') {
    deleteDir()
  }

  stage('Fetch') {
    timeout(time: 60, unit: 'SECONDS') {
      git branch: 'master', url: 'git@github.com:IonicRio/ionicday-dojo.git'
    }
  }
  
  stage('Build'){
    sh 'ionic cordova build android --prod --optimizejs' 
  }
}
