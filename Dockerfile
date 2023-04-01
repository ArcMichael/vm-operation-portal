FROM 192.168.3.200:80/library/node:16.14.0

WORKDIR /usr/src/app

COPY . /usr/src/app/

# RUN npm config set loglevel http

# RUN npm config set registry http://nexus.dependency.in.mly0110.org.cn:8081/repository/group-npm/

RUN npm config set registry http://192.168.3.200:8081/repository/group-npm/

#  --registry=http://nexus.dependency.in.mly0110.org.cn:8081/repository/group-npm/

# npm install glob
# RUN npm install @nestjs/cli -g

# npm install dependency
RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]