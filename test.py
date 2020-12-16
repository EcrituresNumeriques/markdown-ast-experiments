# Python 3+
import subprocess
result = subprocess.run(["pandoc", "short.md", "-t", "json"], capture_output=True)
output = result.stdout.decode("utf-8")


#import pypandoc
#output = pypandoc.convert_file('short.md', format='json')
