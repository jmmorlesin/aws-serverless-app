#!/usr/bin/env bash

cd terraform

sh tf-destroy.sh ${ENVIRONMENT_NAME} aws-s3-backend.tfconfig
      
if [[ $? != 0 ]]; then exit 1; fi

rm -f .env

cd -

echo ""
echo "AWS Serverless App has been cleaned up"
