if ! type "yarn" > /dev/null; then
	npm install; cd app && npm install;
else
	yarn install; cd app && yarn install;
fi