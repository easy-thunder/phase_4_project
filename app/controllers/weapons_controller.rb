class WeaponsController < ApplicationController
    skip_before_action :authorize
    def create
        render json: Weapon.create(weapon_params), status: :created
    end

    def update
        weapon =  Weapon.find_by(id: params[:id])
        render json: weapon.update(weapon_params), status: :ok
    end

    def index 
        render json: Weapon.all, status: :ok
    end
    def destroy 
        Weapon.find_by(id:params[:id]).destroy
    end

private 
    def weapon_params
        params.permit(
        :name,
        :fire_rate, :damage, :area_of_effect, :pierce, :weapon_reload, :bullet_width, :bullet_speed, :critical_rate, :magazine, :accuracy)
    end
end
