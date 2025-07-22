FROM joseluisq/static-web-server:2

COPY . /public

ENV SERVER_PORT=90

ENTRYPOINT ["/static-web-server"]
