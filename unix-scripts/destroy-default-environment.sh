#!/usr/bin/env bash

cd terraform

sh tf-destroy.sh ${ENVIRONMENT_NAME} aws-s3-backend.tfconfig

cd -

echo ""
echo "AWS Serverless App has been cleaned up"
