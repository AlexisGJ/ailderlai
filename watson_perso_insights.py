#!/usr/bin/env python2
# 


import json
from os.path import join, dirname
from watson_developer_cloud import PersonalityInsightsV2
import sys

text = sys.argv[1]

personality_insights = PersonalityInsightsV2(
    username='245c8319-f709-4a86-960c-0864b633ddac',
    password='7MBXhiFtmKi1')

print (text)


json_result = (json.dumps(personality_insights.profile(text=text), indent=2))


print (json_result)

with open("output.txt", "w") as text_file:
	text_file.write(json_result.replace("\n",""))