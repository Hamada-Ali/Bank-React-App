echo "Switching to brach master"
git checkout master

echo "Building App.."
npm run build

echo "Deploying files to server.."
scp -r dist/* hamada@172.105.248.170:/var/www/172.105.248.170


echo "Depoly Success."