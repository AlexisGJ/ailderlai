import json
from os.path import join, dirname
from watson_developer_cloud import PersonalityInsightsV2


personality_insights = PersonalityInsightsV2(
    username='YOUR SERVICE USERNAME',
    password='YOUR SERVICE PASSWORD')

with open(join(dirname(__file__), './resources/personality.txt')) as \
        personality_text:
    print(json.dumps(personality_insights.profile(
        text=personality_text.read()), indent=2))