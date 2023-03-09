class UserWeaponsController < ApplicationController
    skip_before_action :authorize
    def create
        render json: UserWeapon.create!(user_weapon_params), status: :created
    end
    
    def show 
        user = User.find_by(id: params[:id])
        render json: user.weapons, status: :ok
    end


private 
    def user_weapon_params
        params.permit(:user_id, :weapon_id)
    end
end
