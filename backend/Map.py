import base64
import io
import os

import folium
import matplotlib.pyplot as plt
import pandas as pd
import plotly.express as px
import plotly.io as ply
from vincent import Pie

plt.figure(figsize=(1, 1))

def fig_to_base64(fig):
    img = io.BytesIO()
    fig.savefig(img, format='png',
                bbox_inches='tight')
    img.seek(0)

    return base64.b64encode(img.getvalue())

current_dir = os.path.dirname(os.path.abspath(__file__))
data_set_path = os.path.join(current_dir, "Modeling_Data_Set.csv")
data = pd.read_csv(data_set_path)

race_num = []
race = race = ['White','Black/African American','Asian','Pacific Islander',"Other/Mixed","Native American","Hispanic or Latino"]
povertperc = []
name = ['68th Ave',"Highfield Cir", "Briggs Dr","North Sacramento","New Haven Rd",'MacArthur St',"Dry Creek Rd","Marconi Ave","Carmichael","La Chova St","Rancho Cardova",'Water Tree Way',"Kevinberg Dr"]



for i in range(len(data.Longitude)):
    nums = []
    nums.append(data.TractWhite[i])
    nums.append(data.TractBlack[i])
    nums.append(data.TractAsian[i])
    nums.append(data.TractNHOPI[i])
    nums.append(data.TractOMultir[i])
    nums.append(data.TractAIAN[i])
    nums.append(data.TractHispanic[i])
   

    race_num.append(nums)


for i in range(len(data.Longitude)):
    povertperc.append(data.PovertyRate[i])

m = folium.Map(location=[38.575764, -121.478851 ], zoom_start=12)

coordinates = []
col = []

for i in range(len(data['Longitude'])):
    a = float(data.Latitude[i])
    b = float(data.Longitude[i])

    coordinates.append([a,b])

    if data.Cluster[i]==0:
        col.append('blue') 
    elif data.Cluster[i]==1:
        col.append("red")
    else:
        col.append("green")

   
    
for i in range(len(data['Longitude'])):
    fig, ax = plt.subplots()
    plt.pie(race_num[i],autopct='%1.1f%%')
    plt.legend(race, bbox_to_anchor=(5, 6), loc="upper left")
    

    encoded = fig_to_base64(fig)
    my_html = '<img src="data:image/png;base64, {}">'.format(encoded.decode('utf-8'))

    the_html = folium.Html(f"""<p style="text-align: center; font-weight: bold;"><span style="font-family: Arial, Helvetica, sans-serif; font-size: 21px;">{name[i]}</span></p>
    <p style="text-align: left;font-size: 17px;"> Poverty Rate: {povertperc[i]} </p> 
    <p style="text-align: left;font-size: 17px;">Ethnic Proportions:  </p>{my_html}
    """, script=True)



    popup = folium.Popup(the_html, max_width=700)

    folium.Marker(location=coordinates[i], popup=popup, icon= folium.Icon(color=col[i])).add_to(m)

#m.save("index.html")

for i in range(len(data["Longitude"])):
    print(name[i])
    print(i)
    print(data["TractWhite"].iloc[i])
    print(data["MedianFamilyIncome"].iloc[i])

