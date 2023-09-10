import {
  App,
  Duration,
  Stack,
  StackProps,
  aws_certificatemanager as acm,
  aws_route53,
  aws_route53_targets,
  aws_cloudfront,
  aws_lambda,
  aws_s3,
  RemovalPolicy,
  aws_iam,
  aws_s3_deployment,
  aws_ssm,
} from 'aws-cdk-lib';
import {ICloudFrontStack} from './CloudFrontStack';
import * as path from "path";

export interface ICloudFrontCognitoStack extends ICloudFrontStack {
  lambdaEdgeStackId: string
}

export class CloudFrontCognitoStack2 extends Stack {

  constructor(scope: App, id: string, params: ICloudFrontCognitoStack, props?: StackProps) {
    super(scope, id, props);

    const contentS3 = new aws_s3.Bucket(this, "s3Content", {
      bucketName: params.s3.bucketName,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
    })
  }
}
