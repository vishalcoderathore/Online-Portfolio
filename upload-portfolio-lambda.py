import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

    resume_bucket = s3.Bucket('resume.vishalrathore.info')
    build_bucket = s3.Bucket('resumebuild.vishalrathore.info')

    resume_zip = StringIO.StringIO()
    build_bucket.download_fileobj('resumeBuild.zip', resume_zip)

    with zipfile.ZipFile(resume_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            resume_bucket.upload_fileobj(obj, nm,
                ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
            resume_bucket.Object(nm).Acl().put(ACL='public-read')

    print "Job done!"

    return 'Hello from Lambda'