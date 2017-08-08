node('ionic'){
  stage('Clean') {
    deleteDir()
  }

  stage('Fetch') {
    timeout(time: 60, unit: 'SECONDS') {
      git branch: 'master', url: 'https://github.com/IonicRio/ionicday-dojo.git'
    }
  }
  
  stage('install'){
    sh 'npm install' 
  }
  
  stage('Build'){
    sh 'ionic cordova build android --prod --optimizejs' 
  }
}
