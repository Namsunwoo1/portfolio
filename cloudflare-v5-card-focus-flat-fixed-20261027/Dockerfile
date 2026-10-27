FROM nginx:alpine

# 기존 Nginx 기본 설정 삭제 후 위에서 만든 nginx.conf 적용
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 현재 폴더의 파일들(index.html, mp4, js 등)을 Nginx 웹 폴더로 복사
COPY . /usr/share/nginx/html

# 불필요한 설정 파일 정리
RUN rm -f /usr/share/nginx/html/Dockerfile /usr/share/nginx/html/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]