
pipeline {
    agent {
        label 'eshoppers-linux'
    }

    options {
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
    }

    stages {
        stage('Check Environment') {
            steps {
                sh '''
                    echo "Checking CI environment..."
                    ruby -v
                    bundle -v
                    node -v
                    npm -v
                    psql --version
                '''
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'bundle install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                }
            }
        }

        
        stage('Backend Tests') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'eshoppers-db',
                        usernameVariable: 'DB_USER',
                        passwordVariable: 'DB_PASSWORD'
                    )
                ]) {
                    dir('backend') {
                        sh '''
                            export DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@localhost:5432/backend_test"

                            bundle exec rails db:prepare
                            bundle exec rails test
                        '''
                    }
                }
            }
        }


        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo 'Eshoppers CI pipeline completed successfully!'
        }

        failure {
            echo 'Eshoppers CI pipeline failed. Check the stage logs.'
        }
    }
}
