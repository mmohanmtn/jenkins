### Running jenkins in a docker container
docker run -p 8080:8080 -v /var/run/docker.sock:/var/run/docker.sock --name jenkins jenkins/jenkins:lts

# Create First Admin User

Username: madan
Password: DevOpsAdmin
email: mmadan.mohan@gmail.com	
Jenkins URL: http://localhost:8080/ 


Update the apt sources. 
add docker.sources in /etc/apt/sources.list.d with following contents

```
Types: deb
URIs: http://download.docker.com/linux/debian/
Suites:trixie
Signed-by: /usr/share/keyrings/docker.gpg
Components: stable
```

Then apt-update && apt-get -y install docker-ce


After installation change the mode for files in /var/run/* to 775 (chmod) except docker.sock which should have 777.

