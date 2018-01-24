import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):

    sns=boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:021094376121:deployPortfolioTopic')

    try:

        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

        resume_bucket = s3.Bucket('portfolio.vishalrathore.info')
        build_bucket = s3.Bucket('portfoliobuild.vishalrathore.info')

        resume_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfolioBuild.zip', resume_zip)

        with zipfile.ZipFile(resume_zip) as myzip:
            for nm in myzip.namelist():
                
                invalidMimeTypeFormats = ["binary/octet-stream", "application/vnd.ms-fontobject", "binary/octet-stream", "application/x-font-ttf", "application/font-woff"]
                nmArr = nm.split(".")
                nmType = nmArr[-1]
                obj = myzip.open(nm)
                fileType = mimetypes.guess_type(nm)[0]
                if fileType != None :
                    resume_bucket.upload_fileobj(obj, nm,
                        ExtraArgs={'ContentType': fileType})
                    resume_bucket.Object(nm).Acl().put(ACL='public-read')
                else :
                    if nmType == "map" :
                        invalidMimeTypeFormat = invalidMimeTypeFormats[0]
                    elif nmType == "eot" :
                        invalidMimeTypeFormat = invalidMimeTypeFormats[1]
                    elif nmType == "woff2" :
                        invalidMimeTypeFormat = invalidMimeTypeFormats[2]
                    elif nmType == "ttf" :
                        invalidMimeTypeFormat = invalidMimeTypeFormats[3]
                    elif nmType == "woff" :
                        invalidMimeTypeFormat = invalidMimeTypeFormats[4]
                        
                    resume_bucket.upload_fileobj(obj, nm,
                        ExtraArgs={'ContentType': invalidMimeTypeFormat})
                    resume_bucket.Object(nm).Acl().put(ACL='public-read')
                        
        print "Job done!"
        topic.publish(Subject="Portfolio Deployment Success", Message="Congratulations! Your portfolio was deployed sucessfully!")
    
    except :
        topic.publish(Subject="Portfolio Deployment Failure", Message="Error! Seems like something went wrong. Your portfolio was not deployed and the process failed.")
        raise

    return 'Hello from Lambda'