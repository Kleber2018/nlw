import express, { request } from 'express'

import { PrismaClient } from '@prisma/client'
   
import {convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes'
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string';

import cors from 'cors'

const app = express()

app.use(express.json()); // habilitando manipulação de json
app.use(cors()); //para qualqeur uma cessar

//Exemplo de configuração de cors

// app.use(cors(
//    origin: 'http://meusite.com.br'
// )); //para qualqeur uma cessar

const prisma = new PrismaClient() //conexão com banco de dados

//localhost:3333

app.get('/games', async (request, response)=> {
   const games = await prisma.game.findMany({
      include: {
         _count: {
            select: {
               Ads: true,
            }
         }
      }
   })
   return response.json(games);
})

app.post('/games/:id/ads', async (request, response)=> {
   const gameId = request.params.id;
   const body : any = request.body;
   

   const ad = await prisma.ad.create({
      data: {
         gameId,
         name: body.name,
         yearsPlaying: body.yearsPlaying,
         discord: body.discord,
         weekDays: body.weekDays.join(','),
         hourStart: convertHourStringToMinutes(body.hourStart),
         HourEnd: convertHourStringToMinutes(body.hourEnd),
         useVoiceChannel: body.useVoiceChannel,
      }
   })

   return response.status(201).json(ad);
})

app.get('/games/:id/ads', async (request, response) => {
     console.log("ACESSOU")
     const gameId = request.params.id;

     const ads = await prisma.ad.findMany({
         select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            HourEnd: true,
         },
          where: {
               gameId,
          },
          orderBy: {
            createdAt: 'desc',
          }
     })

     return response.json(ads.map(ad => {
      return {
         ...ad,
         weekDays: ad.weekDays.split(','),
         hourStart: convertMinutesToHourString(ad.hourStart),
         HourEnd: convertMinutesToHourString(ad.HourEnd),
      }
     }))
})

app.get('/games/:id/discord', async (request, response) => {
     console.log("ACESSOU")
     const adId = request.params.id;

     const ad = await prisma.ad.findUniqueOrThrow({
      select: {
         discord: true,
      },
      where: {
         id: adId,
      }
     })

     return response.json({
         discord: ad.discord,
     })
})

app.listen(3333)