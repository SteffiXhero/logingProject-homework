FROM joseluisq/static-web-server:2

COPY . /public

ENTRYPOINT ["/static-web-server"]
