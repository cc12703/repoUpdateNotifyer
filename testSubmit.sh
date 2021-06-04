

curl -H "Accept: application/json" -H "Content-type: application/json" -X POST \
     -d '{"repoName":"TestOne", "lastVer":"v1.0.0", "lastUrl":"http://xxx"}' \
     -i http://127.0.0.1:3000/update/submit


curl -H "Accept: application/json" -H "Content-type: application/json" -X POST \
     -d '{"repoName":"TestTwo", "lastVer":"v2.0.0", "lastUrl":"http://xxx"}' \
     -i http://127.0.0.1:3000/update/submit