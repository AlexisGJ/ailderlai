import json
from os.path import join, dirname
from watson_developer_cloud import PersonalityInsightsV2
import sys


personality_insights = PersonalityInsightsV2(
    username='245c8319-f709-4a86-960c-0864b633ddac',
    password='7MBXhiFtmKi1')


with open(join(dirname(__file__), 'personality.txt')) as personality_text:
    json_result = (json.dumps(personality_insights.profile(text=personality_text.read()), indent=2))



with open("output.txt", "w") as text_file:
	text_file.write(json_result.replace("\n",""))